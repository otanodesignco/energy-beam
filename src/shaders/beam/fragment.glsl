uniform float uTime;
uniform vec3 uColor;
uniform sampler2D uTexture;
uniform vec2 utimeOffset;
uniform float uPowerOffset;
uniform float uClipThreshold;
uniform bool uSkew;
uniform vec2 uSkewAmt;
uniform bool uHardEdge;
uniform float uEdgeAmt;

#include ../uv/uvPan.glsl
#include ../util/clip.glsl
#include ../uv/uvSkew.glsl
#include ../uv/uvStretch.glsl

in vec2 vUv;

void main()
{

    vec2 uv = vUv; 
    float time = uTime;

    vec2 uvPanned = uvPan( uv, time, utimeOffset, false, false );

    if( uSkew )
    {
        uvPanned = uvStretch( uvPanned, uSkewAmt );
    }
    

    float noise = texture( uTexture, uvPanned ).r;

    float noiseCutOff = pow( noise, uPowerOffset );

    float noiseFinal = ( uHardEdge ) ? step( uEdgeAmt, noiseCutOff ): noiseCutOff ;

    vec3 colorFinal = uColor;
    colorFinal *= noiseFinal;

    clip( noiseCutOff, uClipThreshold, 0 );

    gl_FragColor = vec4( colorFinal, 1.0 );

}