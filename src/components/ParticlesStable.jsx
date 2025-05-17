"use client";
import Particles from "react-tsparticles";
export default function ParticlesStable(props) {
    return (
        <Particles
            options={{
                background: { color: "#fff" },
                particles: {
                    number: { value: 60 },
                    size: { value: 3 },
                    color: { value: "#FF7272" },
                    links: {
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