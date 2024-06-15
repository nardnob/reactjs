import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Card from 'react-bootstrap/Card';
import './Three.css';

function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef();

    // Hold state for hovered and clicked events
    const [hovered, setHover] = useState(false);
    const [clicked, setClick] = useState(false);
    // Subscribe this component to the render-loop, rotate the mesh every frame
    //useFrame((state, delta) => (ref.current.rotation.x += delta))

    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => setClick(!clicked)}
            onPointerOver={(event) => (event.stopPropagation(), setHover(true))}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[props.boxWidth, props.boxHeight, 1]} />
            <meshStandardMaterial color={hovered ? 'gray' : 'royalblue'} />
        </mesh>
    )
}
export default function Three() {
    return (
        <Card className="three-card" >
            <Card.Body>
                <div className="three-canvas-container">
                    <Canvas className="three-canvas">
                        <ambientLight intensity={0.5} />
                        <spotLight intensity={700} position={[10, 10, 10]} angle={0.15} penumbra={1} />
                        <spotLight intensity={700} position={[30, 10, 10]} angle={0.15} penumbra={1} />
                        <pointLight intensity={700} position={[-10, -10, -10]} />
                        <pointLight intensity={700} position={[10, 10, 10]} />
                        <Box position={[-3, 0, 0]} boxWidth={1} boxHeight={3} />
                        <Box position={[-2, 0, 0]} boxWidth={1} boxHeight={1} />
                        <Box position={[-1, 0, 0]} boxWidth={1} boxHeight={3} />

                        <Box position={[2, 1, 0]} boxWidth={3} boxHeight={1} />
                        <Box position={[2, 0, 0]} boxWidth={1} boxHeight={1} />
                        <Box position={[2, -1, 0]} boxWidth={3} boxHeight={1} />
                        <OrbitControls
                            autoRotate={true}
                            autoRotateSpeed={5}
                            minDistance={1}
                            maxDistance={20}
                            enablePan={false}
                        />
                    </Canvas>
                </div>
                <Card.Title>Three.js in React</Card.Title>
                <Card.Text>
                    Experimenting with react-three-fiber, which is a library for utilizing Three.js in React.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}