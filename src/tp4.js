import * as d3 from 'd3';

window.d3 = d3;
const svg = d3.select('svg');
svg.selectAll('*').remove();

const data = [10, 15, 25, 120, 500, 980, 1200];

// const yScale = d3.scaleLinear()
//     .domain([d3.min(data), d3.max(data)])
//     .range([0, 500]);

const yScale = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, 500]);
yScale.clamp(true);

svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .style('fill', d => d > 1000 ? 'red' : 'blue')
    .style('stroke', 'black')
    .style('stroke-width', 1)
    .style('opacity', .25)
    .attr('x', (d, i) => i * 40 + 20)
    .attr('width', 20)
    .attr('y', d => 500 - yScale(d))
    .attr('height',d => yScale(d))

