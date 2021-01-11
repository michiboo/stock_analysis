import React from 'react';
import { Make_caro } from '../components/Carousel'
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core'

var left_caro_sty={style : { width:'50%', display: 'inline-block'}, height: '40vh'}
var right_caro_sty={style : { width:'100%', height: '20vh'}}
var top_caro_sty={style : { width:'100%'}, heading : ['ad1', 'ad2']}
export default function Home() {
    return (
        <div>
            {Make_caro(top_caro_sty)}
            {Make_caro({...left_caro_sty, heading : ['ipo news', 'ipo news 2']})}
            <div style={{ float: 'right', width: "50%" }}>
                {Make_caro({...right_caro_sty, heading : ['positive news ', 'positive news 2']})}
                {Make_caro({...right_caro_sty, heading : ['negative news ', 'negative news 2']})}
            </div>
      
      <div>
                This week recommandation
      </div>

        //   {/* <div style={{position: "relative", width: '50%'}}><TimeLineGraph/></div> */ }
        </div>
    );
}