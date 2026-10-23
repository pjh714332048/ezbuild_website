import { Component, type ReactNode, Suspense } from 'react';

import Box from '@mui/material/Box';
import { Bounds, Center, Clone, Html, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

type ModelRendererProps = {
  readonly src: string;
  readonly height?: number | string;
  readonly background?: string;
};

const Model = ({ src }: { readonly src: string }) => {
  const { scene } = useGLTF(src);
  return <Clone object={scene} />;
};

class ModelErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <Box
          role='alert'
          sx={{ display: 'grid', placeItems: 'center', height: '100%', color: '#666' }}
        >
          模型加载失败，请检查 GLB 文件路径
        </Box>
      );
    }
    return this.props.children;
  }
}

const ModelRenderer = ({ src, height = 480, background = '#f1f3f5' }: ModelRendererProps) => {
  return (
    <Box sx={{ width: '100%', height, background, borderRadius: 3, overflow: 'hidden' }}>
      <ModelErrorBoundary key={src}>
        <Canvas
          camera={{ position: [5, 5, 5], fov: 45 }}
          frameloop='demand'
          dpr={[1, 2]}
          style={{ userSelect: 'none', touchAction: 'none', cursor: 'grab' }}
          fallback={<Box sx={{ p: 2, color: '#666' }}>当前浏览器不支持 WebGL</Box>}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 20, 10]} intensity={2.5} />
          <Suspense
            fallback={
              <Html center>
                <span style={{ fontSize: 14, color: '#666', whiteSpace: 'nowrap' }}>
                  模型加载中…
                </span>
              </Html>
            }
          >
            <Bounds fit clip observe margin={1.2}>
              <Center>
                <Model src={src} />
              </Center>
            </Bounds>
          </Suspense>
          <OrbitControls makeDefault />
        </Canvas>
      </ModelErrorBoundary>
    </Box>
  );
};

export default ModelRenderer;
