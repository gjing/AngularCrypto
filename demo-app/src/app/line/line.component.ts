import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  @Input() data?: any[];

  title = 'Line Chart';

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;

  constructor() {
      this.width = 960 - this.margin.left - this.margin.right;
      this.height = 500 - this.margin.top - this.margin.bottom;
      this.line = d3Shape.line();
  }

  ngOnInit() {
    this.buildSvg();
    this.addXandYAxis();
    this.drawLineAndPath();
  }

  private buildSvg() {
    this.svg = d3.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private addXandYAxis() {
    if (this.data && 'data' in this.data) {
      let pdata: any = this.data["data"];
      this.x = d3Scale.scaleTime().range([0, this.width]);
      this.y = d3Scale.scaleLinear().range([this.height, 0]);
      this.x.domain(d3Array.extent(pdata, (d: any) => new Date(d.time) ));
      this.y.domain(d3Array.extent(pdata, (d: any) => d.priceUsd ));

     this.svg.append('g')
         .attr('transform', 'translate(0,' + this.height + ')')
         .call(d3Axis.axisBottom(this.x));
     // Configure the Y Axis
     this.svg.append('g')
         .attr('class', 'axis axis--y')
         .call(d3Axis.axisLeft(this.y));
    }
  }

  private drawLineAndPath() {
    if (this.data && 'data' in this.data) {
      console.log(this.data.data);
      this.line = d3Shape.line()
        .x( (d: any) => this.x(new Date(d.date)) )
        .y( (d: any) => this.y(d.priceUsd) );

      this.svg.append('path')
        .datum(this.data.data)
        .style("stroke", "grey")
        .style("fill", "none")
        .style("stroke-width", 2)
        .attr('class', 'line')
        .attr('d', this.line);
    }
  }
}
