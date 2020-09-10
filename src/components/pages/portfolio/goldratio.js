import React, { Component } from 'react';
import styled from 'styled-components';
import { NoteMain } from './BallsHitting'

class goldratio extends Component {

    constructor(props) {
        super(props);
        this.drawRoundGraph = this.drawRoundGraph.bind(this);
    }
    componentDidMount() {
        this.drawRoundGraph();
    }

    drawRoundGraph() {        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');        

        function drawTree(position, x, y) {
            let radius = 3;
            let xArcBegin = 0;
            let yArcBegin = 0;
            let xBegin = 0;
            let yBegin = 0;
            let xLineLeft = 0;
            let yLineLeft = 0;
            let xLineM = 0;
            let yLineM = 0;
            let xLineR = 0;
            let yLineR = 0;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);

        ctx.stroke();
        ctx.save();

        xArcBegin = x + radius;
        yArcBegin = y;
        xBegin = x + radius + 20;
        yBegin = y;
        xLineM = x + 35;
        yLineM = y;
        xLineLeft = xLineM;
        yLineLeft = y - 6;
        xLineR = xLineM;
        yLineR = y + 6
        
        ctx.moveTo(xArcBegin, yArcBegin);        
        ctx.lineTo(xBegin, yBegin);        
        ctx.stroke();

        ctx.restore();
        ctx.moveTo(xBegin, yBegin);
        ctx.lineTo(xLineLeft, yLineLeft);
        ctx.stroke();

        ctx.restore();
        ctx.moveTo(xBegin, yBegin);
        ctx.lineTo(xLineM, yLineM);
        ctx.stroke();

        ctx.restore();
        ctx.moveTo(xBegin, yBegin);
        ctx.lineTo(xLineR, yLineR);
        ctx.stroke();

            //if (position === 1) {            
            //    } else if (position === 2) {
            //    ctx.translate(xBegin, yBegin);
            //    ctx.rotate(30 * Math.PI / 180);
            //    ctx.translate(-xBegin, -yBegin);
            //    } else {
            //}        
        } 

        let a = 2;
        let x = 300;
        let y = 300;
        let radius = 5;
        
            for (let i = 11; i > 0; i--) {
                ctx.beginPath();
                if (i % 4 === 3) {                
                ctx.arc(x - radius * 1.68 + radius, y, radius * 1.68, 0 * Math.PI, 0.5 * Math.PI);                
                x = x - radius * 1.68 + radius;                
                } else if (i % 4 === 2) {
                    ctx.arc(x, y - radius * 1.68 + radius, radius * 1.68, 0.5 * Math.PI, 1 * Math.PI);                
                    y = y - radius * 1.68 + radius;
                } else if (i % 4 === 1) {
                    ctx.arc(x + radius * 1.68 - radius, y, radius * 1.68, 1 * Math.PI, 1.5 * Math.PI);                
                    x = x + radius * 1.68 - radius;
                } else {
                    ctx.arc(x, y + radius * 1.68 - radius, radius * 1.68, 1.5 * Math.PI, 0 * Math.PI);                
                    y = y + radius * 1.68 - radius;
                }               
                ctx.stroke();
                radius = radius * 1.68
                }
                

    }

    render() {
        return (
            <NoteMain>
                <canvas ref="canvas" width={1000} height={1000} />
            </NoteMain>
        );
    }
}

export default goldratio;