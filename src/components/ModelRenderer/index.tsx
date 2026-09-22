import { Suspense } from 'react';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Bounds, Center, Html, OrbitControls, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import type { Group } from 'three';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

type ModelRendererProps = {
  readonly src: string;
  readonly mtlSrc?: string;
  readonly height?: number | string;
  readonly background?: string;
  readonly autoRotate?: boolean;
};

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <span style={{ fontSize: 14, color: '#666' }}>{Math.round(progress)}% loaded</span>
    </Html>
  );
};

const ObjWithMaterial = ({ src, mtlSrc }: { readonly src: string; readonly mtlSrc: string }) => {
  const materials = useLoader(MTLLoader, mtlSrc);
  const object = useLoader(OBJLoader, src, loader => {
    materials.preload();
    (loader as OBJLoader).setMaterials(materials);
  }) as Group;
  return <primitive object={object} />;
};

const ObjPlain = ({ src }: { readonly src: string }) => {
  const object = useLoader(OBJLoader, src) as Group;
  return <primitive object={object} />;
};

const ModelRenderer = ({
  src,
  mtlSrc,
  height = 480,
  background = '#f5f7fb',
  autoRotate = true,
}: ModelRendererProps) => {
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('md'));

  return (
    <Box sx={{ width: '100%', height, background, borderRadius: 3, overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={isMobile ? [1, 1.5] : [1, 2]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 12, 8]} intensity={1.5} />
        <directionalLight position={[-8, 6, -10]} intensity={0.7} />
        <Suspense fallback={<Loader />}>
          <Bounds fit clip observe margin={1.2}>
            <Center>
              {mtlSrc ? <ObjWithMaterial src={src} mtlSrc={mtlSrc} /> : <ObjPlain src={src} />}
            </Center>
          </Bounds>
        </Suspense>
        <OrbitControls
          makeDefault
          autoRotate={autoRotate}
          autoRotateSpeed={0.8}
          enablePan={!isMobile}
          enableZoom
        />
      </Canvas>
    </Box>
  );
};

export default ModelRenderer;
