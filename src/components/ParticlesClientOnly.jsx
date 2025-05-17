"use client";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function ParticlesClientOnly({ id, options, style }) {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    return (
        <Particles
            id={id}
            init={particlesInit}
            options={options}
            style={style}
        />
    );
} 