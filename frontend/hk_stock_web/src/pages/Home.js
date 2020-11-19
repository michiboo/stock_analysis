import React from 'react';
import { Make_caro } from '../components/Carousel'
import Box from '@material-ui/core/Box';
import { Button } from '@material-ui/core'

var left_caro_sty={style : { width:'50%', display: 'inline-block'}, height: '40vh'}
var right_caro_sty={style : { width:'100%'}}
var top_caro_sty={style : { width:'100%'}}
export default function Home() {
    return (
        <div>
            {Make_caro(top_caro_sty)}
            {Make_caro(left_caro_sty)}
            <div style={{ float: 'right', width: "50%" }}>
                {Make_caro(right_caro_sty)}
                {Make_caro(right_caro_sty)}
            </div>
            <Box color="text.primary">
                This week recommandation
      </Box>
        //   {/* <div style={{position: "relative", width: '50%'}}><TimeLineGraph/></div> */ }
        </div>
    );
}