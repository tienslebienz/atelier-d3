import * as d3 from 'd3';

const svg = d3.select('svg');
svg.selectAll('*').remove();

const width = 500;
const height = 500;
const fullAngle = 2 * Math.PI;

const arc1 = d3.arc()
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(fullAngle / 4);

svg
    .append('g')
    .attr('transform', 'translate(200, 250)')
    .append('path')
    .attr('d', arc1())
    .attr('fill', 'red');


const data = [1, 2, 1, 5, 6, 8, 10];
const color = d3.scaleOrdinal(d3.schemeCategory10);

const arc = d3.arc()
    .outerRadius(150)
    .innerRadius(110)

const group = svg.append('g')
    .attr('transform', 'translate(200, 250)')

const arcs = d3.pie()(data);

arcs.forEach((d, i) => group
    .append('path')
    .attr('fill', color(i))
    .transition()
    .duration(2000)
    //.attr('d', arc(d))
    .attrTween('d', function() {
        const start = { startAngle: 0, endAngle: 0 };
        const interpolate = d3.interpolate(start, d);
        return t => arc(interpolate(t));
    })
);

