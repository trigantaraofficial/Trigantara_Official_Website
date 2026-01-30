import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Trigantara - Pramuka SMK Marhas Margahayu'
export const size = {
    width: 1200,
    height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(to bottom right, #050505, #1a1a1a)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'serif',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 20,
                    }}
                >
                    {/* Text Logo */}
                    <div style={{ fontSize: 80, fontWeight: 900, color: '#D4AF37', letterSpacing: '0.1em' }}>TRIGANTARA</div>
                </div>

                <div style={{ fontSize: 32, color: 'rgba(255,255,255,0.9)', marginBottom: 10, letterSpacing: '0.05em' }}>
                    AMBALAN KI HAJAR DEWANTARA - INGGIT GARNASIH
                </div>
                <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.5)', marginTop: 20 }}>
                    SMK MARHAS MARGAHAYU
                </div>

                <div style={{
                    position: 'absolute',
                    bottom: 40,
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: 20,
                    color: '#D4AF37'
                }}>
                    trigantara.com
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
