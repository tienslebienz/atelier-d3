import * as d3 from 'd3';

window.d3 = d3;
const svg = d3.select('svg');
svg.selectAll('*').remove();

const data = [...Array(11)].map((_, i) => i);

const colorScale = d3.scaleLinear()
    .domain([0, 10])
    .range(['purple', 'orange'])
    .interpolate(d3.interpolateHclLong);

svg.selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .style('fill', d => colorScale(d))
    .style('stroke', 'black')
    .style('stroke-width', 1)
    .attr('cx', (d, i) => i * 40 + 20)
    .attr('cy', 100)
    .attr('r', 30)

