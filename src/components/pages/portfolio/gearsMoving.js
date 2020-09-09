import React, { Component } from 'react';
import { NoteMain } from './BallsHitting'

class gearsMoving extends Component {

    constructor(props) {
        super(props);
        this.drawRoundGraph = this.drawRoundGraph.bind(this);
        this.test = this.test.bind(this);
    }

    componentDidMount() {
        this.drawRoundGraph();
    }

    drawRoundGraph() {        
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');        

        let deg1 = [{id: 1, deg: 0, rad: 40, x: 200, y: 200},
         {id: 2, deg: 0, rad: 20, x: 0, y: 0},
         {id: 3, deg: 0, rad: 90, x: 0, y: 0},
         {id: 4, deg: 0, rad: 120, x: 0, y: 0},
         {id: 5, deg: 0, rad: 10, x: 0, y: 0}
        ];
        

        function gear(gearName, x, y) {        

            if (x !== 0 && y !== 0) {
            } else {
                let formerGear = deg1[gearName.id - 2]
                x = formerGear.x + formerGear.rad + gearName.rad;
                y = formerGear.y;
                gearName.x = x;
                gearName.y = y;
            }

        ctx.translate(x, y);
        ctx.rotate(gearName.deg * Math.PI / 180);
        ctx.translate(-x, -y);
        ctx.beginPath();
        ctx.setLineDash([5, 15]);
        ctx.arc(x, y, gearName.rad, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.translate(x, y);
        ctx.rotate(-gearName.deg * Math.PI / 180);
        ctx.translate(-x, -y);
        ctx.font = '10px serif';
        ctx.fillText(360/gearName.rad , x - 5 , y);
        
        gearName.deg = gearName.deg + 360/gearName.rad

        }
        
        for (let i = 0; i < 300; i++) {
            setTimeout(() => {
                ctx.clearRect(0, 0, 1000, 1000);           
                ctx.font = '10px serif';
                ctx.fillText('Teeth moving speed: ' , 50, 200);
                deg1.forEach(data => gear(data, data.x, data.y));
            }, i * 100);
            
        }

    }

    test(e) {

        let x = e.clientX;
        let y = e.clientY;
        console.log(x, y)
    }

    render() {
        return (
            <NoteMain>
                <canvas onClick={this.test} ref="canvas" width={1000} height={1000} />
            </NoteMain>
        );
    }
}

export default gearsMoving;