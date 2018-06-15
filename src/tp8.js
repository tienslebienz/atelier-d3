import * as d3 from 'd3';

/*
 * “M0,-100A100,100,0,0,1,100,0L0,0Z”
 */

const svg = d3.select('svg');
svg.selectAll('*').remove();

const width = 500;
const height = 500;
const margin = 25;
const axisLength = width - 2 * margin;

const data1 = [
    {x: 0, y: 4},
    {x: 1, y: 9},
    {x: 2, y: 6},
    {x: 4, y: 5},
    {x: 6, y: 7},
    {x: 7, y: 3},
    {x: 9, y: 2},
];

const data2 = [
    {x: 0, y: 3},
    {x: 2, y: 7},
    {x: 3, y: 4},
    {x: 4, y: 3},
    {x: 6, y: 3},
    {x: 8, y: 4},
    {x: 9, y: 1},
];

const xScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, axisLength]);

const yScale = d3.scaleLinear()
    .domain([10, 0])
    .range([0, axisLength]);

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

svg.append('g')
    .classed('x-axis', true)
    .attr('transform', () => `translate(${margin}, ${height - margin})`)
    .call(xAxis);

svg.append('g')
    .classed('y-axis', true)
    .attr('transform', () => `translate(${margin}, ${margin})`)
    .call(yAxis);

const line = d3.line()
    .x(d => xScale(d.x))
    .y(d => yScale(d.y))
    //.curve(d3.curveBasis)
    //.curve(d3.curveCardinal)
    .curve(d3.curveStep)

svg.append('path')
    .attr('d', line(data1))
    .attr('fill', 'none')
    .attr('stroke', 'red')
    .attr('transform', () => `translate(${margin}, ${margin})`);

svg.append('path')
    .attr('d', line(data2))
    .attr('fill', 'none')
    .attr('stroke', 'blue')
    .attr('transform', () => `translate(${margin}, ${margin})`);

