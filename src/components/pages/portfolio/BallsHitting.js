import React, { Component } from 'react';
import styled from 'styled-components';
import { Main } from '../../../Css'

class BallsHitting extends Component {

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

        function makeRanNum(num) {
            let ran = Math.random();
            return Math.trunc(ran * num);
        }

        const balls = [
            { id : 1, radius: 50, xLoc : 102, toX : makeRanNum(2), yLoc : 800, toY : makeRanNum(2) },
            { id : 2, radius: 50, xLoc : 205, toX : makeRanNum(2), yLoc : 300, toY : makeRanNum(2) },
            { id : 3, radius: 50, xLoc : 407, toX : makeRanNum(2), yLoc : 100, toY : makeRanNum(2) },
            { id : 4, radius: 50, xLoc : 709, toX : makeRanNum(2), yLoc : 200, toY : makeRanNum(2) }
        ]
        
        //let yLoc = 300;
        //let toY = false;
        //let xLoc = 600;
        //let toX = true;

        function ball(obj) {            
            if (obj.toY === true ) {
                if (obj.toX === true) {
                    obj.yLoc = obj.yLoc + 1;
                    obj.xLoc = obj.xLoc + 1
                } else {
                    obj.yLoc = obj.yLoc + 1;
                    obj.xLoc = obj.xLoc - 1
                }                
                
            } else {
                if (obj.toX === true) {
                    obj.yLoc = obj.yLoc - 1;
                    obj.xLoc = obj.xLoc + 1
                } else {
                    obj.yLoc = obj.yLoc - 1;
                    obj.xLoc = obj.xLoc - 1
                }                                
            }

            balls.forEach(data => {
                if (data.id !== obj.id) {
                    if (Math.pow(obj.radius + data.radius, 2) === Math.pow(obj.xLoc - data.xLoc, 2) + Math.pow(obj.yLoc - data.yLoc, 2) ||       
                    obj.radius + data.radius === Math.abs(obj.xLoc - data.xLoc) && obj.yLoc === data.yLoc ||
                    obj.radius + data.radius === Math.abs(obj.yLoc - data.yLoc) && obj.xLoc === data.xLoc ) {
                        obj.toX = !obj.toX;
                        data.toX = !data.toX;
                        obj.toY = !obj.toY;
                        data.toY = !data.toY;
                    }
                }
            })

            ctx.beginPath();
            ctx.arc(obj.xLoc, obj.yLoc, obj.radius, 0, 2 * Math.PI);
            ctx.stroke();                       

            if (obj.yLoc === 1000 - obj.radius) {
                obj.toY = false;
            } else if (obj.yLoc === obj.radius) {
                obj.toY = true;
            }
            if (obj.xLoc === 1000 - obj.radius) {
                obj.toX = false;
            } else if (obj.xLoc === obj.radius) {
                obj.toX = true;
            }
            
        }        

        function fallBall(y) {
            setTimeout(() => {
                ctx.clearRect(0, 0, 1000, 1000);            
                balls.forEach(obj => ball(obj));                
            }, 500 + y)
        }
        
        for (let i = 0; i <= 10000; i++) {
            fallBall(i);
        }

    }

    render() {
        return (
            <Main>
                <canvas ref="canvas" width={1000} height={1000} />
            </Main>
        );
    }
}

export default BallsHitting;
