import * as d3 from 'd3';

const svg = d3.select('svg');
svg.selectAll('*').remove();

function drawChart(data) {
    const rects = svg.selectAll('rect').data(data);
    rects
        .exit()
        .transition()
        .attr('height', 0)
        .attr('y', 500)
        .remove();
    rects
        .transition()
        .attr('height', 0)
        .attr('y', 500);

    rects.enter()
        .append('rect')
        .style('fill', 'blue')
        .style('stroke', 'black')
        .style('stroke-width', 1)
        .style('opacity', .25)
        .attr('height', 0)
        .attr('y', 500)
        .merge(rects)
        .attr('x', (d, i) => i * 40 + 20)
        .attr('width', 20)
        .transition()
        //.attr('y', 0)
        .attr('y', d => 500 - d)
        .attr('height', d => d)
}

const nbElt = () => d3.randomUniform(1, 20)() | 0;
const randomElt = () => d3.randomUniform(1, 100)() | 0;
const randomElts = () => [...Array(nbElt())].map(randomElt);
setInterval(() => drawChart(randomElts()), 500);
