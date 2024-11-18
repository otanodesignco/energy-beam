uniform float uTime;
uniform sampler2D uTexture;
uniform vec2 uPanSpeed;
uniform vec3 uColor1;
uniform vec3 uColor2;

in vec2 vUv;

#include ../uv/uvPan.glsl

void main()
{

    vec2 uv = vUv;
    float time = uTime;

    vec2 uvPanning = uvPan( uv, time, uPanSpeed, false, false );

    float textureDusty = 1.0 - texture( uTexture, uvPanning ).r;
    float maskTop = smoothstep( 0.01, 0.2, uv.y );
    float maskBottom = smoothstep( 1.0, 0.2, uv.y );
    
    textureDusty = smoothstep( 0.6, 1.0, textureDusty );

    float mask = textureDusty * maskTop * maskBottom;

    vec3 colorFinal = mix( uColor1, uColor2, 1.0 - uv.y );
    colorFinal *= textureDusty;

    gl_FragColor = vec4( colorFinal , 1.0 * mask );

}