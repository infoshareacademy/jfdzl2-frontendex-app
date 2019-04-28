import React from 'react'
import { ResponsivePie } from '@nivo/pie'
import './Dashboard.css'
import db from '../../database/firebase'

class Chart extends React.Component {

    render() {
        console.log(db.length)
        return (
            <div className="chart-container">
                <div className="chart-title">
                <h2>Mamy 40 zarejestrowanych warsztatów</h2>
                </div>
                    <ResponsivePie
                        data={[
                            {
                                id: 'Elektromechanika',
                                label: 'Elektromechanika',
                                value: 139,

                            },
                            {
                                id: 'Instalacje LPG',
                                label: 'Instalacje LPG',
                                value: 200,

                            },
                            {
                                id: 'Wulkanizacja',
                                label: 'Wulkanizacja',
                                value: 472,

                            },
                            {
                                id: 'Klimatyzacja',
                                label: 'Klimatyzacja',
                                value: 100,

                            },
                            {
                                id: 'Tuning',
                                label: 'Tuning',
                                value: 427,

                            },
                            {
                                id: 'Kosmetyka aut',
                                label: 'Kosmetyka au',
                                value: 237,

                            }
                        ]}
                        margin={{
                            "top": 60,
                            "right": 20,
                            "bottom": 60,
                            "left": 0
                        }}
                        innerRadius={0.5}
                        cornerRadius={5}
                        colors="spectral"
                        colorBy="id"
                        borderWidth={1}
                        borderColor="inherit:darker(0.2)"
                        radialLabelsSkipAngle={0}
                        radialLabelsTextXOffset={3}
                        radialLabelsTextColor="#fff"
                        radialLabelsLinkOffset={0}
                        radialLabelsLinkDiagonalLength={10}
                        radialLabelsLinkHorizontalLength={10}
                        radialLabelsLinkStrokeWidth={2}
                        radialLabelsLinkColor="inherit"
                        slicesLabelsSkipAngle={10}
                        slicesLabelsTextColor="#333333"
                        animate={true}
                        motionStiffness={90}
                        motionDamping={15}
                        isInteractive={false}
                    />
            </div>

        )
    }
}
export default Chart