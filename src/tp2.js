import * as d3 from 'd3';

const svg = d3.select('svg');
const circles = svg.selectAll('circle')
const random = d3.randomUniform(1, 50);
setInterval(() => circles.data([random(), random()]).attr('r', d => d), 1000);
