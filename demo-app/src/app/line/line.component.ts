import { Component, Input } from '@angular/core';
import * as d3 from 'd3';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';

@Component({
  selector: 'app-line',
  standalone: true,
  imports: [],
  templateUrl: './line.component.html',
  styleUrl: './line.component.css'
})
export class LineComponent {
  @Input()
  data: any = {};

  // public activeField: number;
  public dataFields: string[] = ['priceUSD', 'time'];
  public chartData: any;
  private host: any;
  private svg: any;
  // private htmlElement: HTMLElement;

  private margin = { top: 10, right: 10, bottom: 15, left: 25 };
  public width: number;
  public height: number;
  private x: any;
  private y: any;
  private line: d3Shape.Line<[number, number]>;

  contructor() {}

  ngOnInit() {
    this.setup();
  }

  private setup(): void {
    console.log('LineChartComponent:setup');
    this.chartData.data = this.data["data"];
    this.buildSvg();
  }

  private buildSvg(): void {
    console.log('LineChartComponent:buildSvg');
    this.host = d3.select(this.htmlElement);
    let svgElement: any = this.htmlElement.getElementsByClassName('svg-chart')[0];
    
    // Do some automatic scaling for the chart
    this.width = svgElement.clientWidth - this.margin.left - this.margin.right;
    this.height = svgElement.clientHeight * 0.90 - this.margin.top - this.margin.bottom;
    this.svg = this.host.select('svg')
      .append('g')
      .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

    this.svg
      .append("text")
      .text(this.chartData.locationName) // set watermark
      .attr("y", "50%") // set the location of the text with respect to the y-axis
      .attr("x", "40%") // set the location of the text with respect to the x-axis
      .style("fill", "#0000AA") // set the font color
      .style("font-size", "2.3em")
      .style("font-weight", "bold")
      .attr("alignment-baseline", "middle")
      .attr("text-anchor", "middle")
  }
}
