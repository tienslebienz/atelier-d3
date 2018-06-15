import * as d3 from 'd3';

window.d3 = d3;
const svg = d3.select('svg');
svg.selectAll('*').remove();

const data = [10, 15, 25, 120, 500, 980, 1200];

// const yScale = d3.scaleLinear()
//     .domain([d3.min(data), d3.max(data)])
//     .range([0, 500]);

const yScale = d3.scaleLinear()
    .domain([1000, 0])
    .range([0, 500])
    .clamp(true)
;

const yAxis = d3.axisLeft(yScale).ticks(5, 's');
svg
    .append('g')
    .attr('transform', 'translate(50, 0)')
    .call(yAxis)
;

svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .style('fill', d => d > 1000 ? 'red' : 'blue')
    .style('stroke', 'black')
    .style('stroke-width', 1)
    .style('opacity', .25)
    .attr('x', (d, i) => i * 40 + 60)
    .attr('width', 20)
    .attr('y', d => yScale(d))
    .attr('height', d => 500 - yScale(d))
;
