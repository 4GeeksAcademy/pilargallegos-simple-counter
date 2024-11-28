import React, { useState } from "react";
import { Badge, Container } from "react-bootstrap";

const SecondsCounter = () => {
    const [seconds, setSeconds] = useState(0);

    return (
        <div style={{ textAlign: "center", margin: "20px", display: "vertically" }}>
            <Container style={{display: "flex", justifyContent: "center"}}>
                {String(seconds).split("").map((unit, index)=> {
                    return ( 
                        <h1 key={index}>  <Badge className="p-3" bg="dark">{unit}</Badge></h1>
                    )
                })}
              
            </Container>
            <div>
                <button onClick={() => setSeconds(seconds - 1)} style={{ margin: "5px", borderRadius: "5px", border: "none", backgroundColor:"lightsalmon"}}>
                    -1
                </button>
                <button onClick={() => setSeconds(seconds + 1)} style={{ margin: "5px", borderRadius: "5px", border: "none", backgroundColor:"lightgreen"}}>
                    +1
                </button>
             
                <button onClick={() => setSeconds(0)} style={{ margin: "5px", borderRadius: "5px", border: "none", backgroundColor:"slategrey", color:"white"
                }}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default SecondsCounter;
