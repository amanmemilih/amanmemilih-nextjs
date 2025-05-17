"use client";
import Particles from "react-particles-js";
export default function ParticlesLegacy(props) {
    return (
        <Particles
            params={{
                particles: {
                    number: { value: 60 },
                    size: { value: 3 },
                    color: { value: "#FF7272" },
                    line_linked: {
                        enable: true,
                        color: "#FF7272",
                        opacity: 0.5,
                        width: 1.5,
                    },
                    move: { enable: true, speed: 2 },
                },
            }}
            style={props.style}
        />
    );
} 