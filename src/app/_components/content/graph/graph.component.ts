import { Component, OnInit, OnDestroy } from '@angular/core';
import { IGraphData } from "app/_interfaces/i-graph-data";
import { SocialService } from "app/_services";
import { Subscription } from "rxjs/Subscription";

declare var d3: any;
@Component({
  selector: 'test30hills-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit, OnDestroy {
  svg: any;
  color: any;
  simulation: any;
  link: any;
  node: any;
  text: any;
  graphData: IGraphData;
  names: [{ id: String, fullname: String }];
  private subscription: Subscription;

  constructor(private socialService: SocialService) {
    this.subscription = this.socialService.getRelationshipGraph().subscribe((data: any) => {
      this.graphData = data.data;
      this.names = data.names;
      this.socialService.setChoosenUser(this.names[19].id);

      var height = document.getElementById('outerSvg').offsetHeight;
      var width = document.getElementById('outerSvg').offsetWidth;

      this.initGraph(width, height);

    });
  }

  ngOnInit() {  }

  initGraph(width: number, height: number) {
    if (this.graphData != undefined) {
      this.svg = d3.select("svg");
      this.color = d3.scaleOrdinal(d3.schemeCategory20);

      this.simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function (d) { return d.id; }))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

      this.render(this.graphData);
    }

  }

  ticked() {
    this.link
      .attr("x1", function (d) { return d.source.x; })
      .attr("y1", function (d) { return d.source.y; })
      .attr("x2", function (d) { return d.target.x; })
      .attr("y2", function (d) { return d.target.y; });

    this.node
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; });
  }

  render(graph) {
    let self = this;
    this.link = this.svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter().append("line")
      .attr("stroke-width", function (d) { return 2; /*Math.sqrt(d.value);*/ });

    this.node = this.svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("r", 5 * 2)
      .attr("fill", (d) => { return this.color(d.group); })
      .call(d3.drag()
        .on("start", (d) => { return this.dragstarted(d) })
        .on("drag", (d) => { return this.dragged(d) })
        .on("end", (d) => { return this.dragended(d) }));


    this.text = this.svg.selectAll('.myText').data(graph.nodes)
      // .enter().append("circle").append("g")
      // .attr("class", "labels")
      // .selectAll("circle")
      // .data(graph.nodes)
      .enter().append("text")
      .attr("dx", (d) => {
        return d.x;
      })
      .attr("dy", (d) => {
        return d.y;
      })
      .text((d) => {
        return self.names.find(x => x.id.toString() == d.id.toString()).fullname.split('.')[0];
      })
      .style("text-anchor", "middle")
      .style("fill", "#555")
      .style("font-family", "Arial")
      .style("font-size", 12)
      .call(d3.drag()
        .on("start", (d) => { return this.dragstarted(d) })
        .on("drag", (d) => { return this.dragged(d) })
        .on("end", (d) => { return this.dragended(d) }));


    this.node.append("title")
      .text((d) => {
        return self.names.find(x => x.id.toString() == d.id.toString()).fullname;
      });

    this.node.on("click", (d) => { this.selected(d) })

    this.simulation
      .nodes(graph.nodes)
      .on("tick", () => { return this.ticked() });

    this.simulation.force("link")
      .links(graph.links);
  }

  selected(user) {
    this.socialService.setChoosenUser(user.id);
  }

  dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  dragended(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  dragstarted(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  ngOnDestroy() {
    if (this.subscription != undefined) this.subscription.unsubscribe();
  }
}
