
uniform float uTime;
uniform sampler2D uNoise1;
uniform sampler2D uGMap;

in vec2 vUv;

#include ../uv/polarCoords.glsl
#include ../uv/uvPan.glsl
#include ../uv/uvSkew.glsl
#include ../util/remap.glsl
#include ../util/colorBanding.glsl
#include ../util/colorGradientMap.glsl

void main()
{

    vec2 uv = vUv;
    float time = uTime;


    vec2 uvPolar = polarCoords( uv  );
    uvPolar = uvSkew( uvPolar, vec2( -1.0, 0.0 ), false );
    uvPolar = uvPan( uvPolar, time, vec2( 0.2), false, false );

    vec2 uvPolar2 = polarCoords( uv );
    uvPolar2 = uvSkew( uvPolar2, vec2( - 2.0, 0.0 ), false );
    uvPolar2 = uvPan( uvPolar2, time, vec2( 0.5), false, false );
    //uvPolar2 *= vec2( 2.0, 0.25 );

    float noise1 = texture( uNoise1, uvPolar ).r;

    float noise2 = texture( uNoise1, uvPolar2 ).b;

    float center = length( uv - 0.5 );
    float mask = min( 1.0 - smoothstep( 0.4, 0.5, center ), smoothstep( 0.0, 0.3, center));

    float noiseFinal = pow( 1.0 - noise1 * noise2, 4.0 );

    vec4 colorNoise = vec4( vec3( noiseFinal ), 1.0 );

    vec4 colorFinal = colorGradientMap( colorNoise, uGMap, 1.5 );

    float cutOff = step( noise1 * noise2, 0.28 );
    
    colorFinal.rgb = colorBanding( colorFinal.rgb, 6.0, 0 );
    colorFinal.rgb *= 4.0;
    colorFinal.a *= cutOff * mask;

    gl_FragColor = colorFinal;

}