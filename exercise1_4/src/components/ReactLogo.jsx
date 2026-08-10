import React from 'react';

export default function ReactLogo() {
    return (
        <div>

            <div style={{
                textAlign: 'center',
                border: '1px solid #888',
                padding: '20px 0 40px 0',
                width: '420px',
                backgroundColor: '#fff',
                margin: '20px auto',
                boxSizing: 'border-box'
            }}>

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    width="300"
                    style={{ marginBottom: '15px' }}
                />

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                    <div style={{ width: '85%', height: '3px', backgroundColor: '#1a6288', position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '3px', height: '12px', backgroundColor: '#1a6288' }}></div>
                    </div>
                </div>

                <h4 style={{
                    fontFamily: '"Caveat", cursive',
                    color: '#1a6288',
                    fontSize: '25px',
                    margin: '5px 0 0 0',
                    fontWeight: 600
                }}>
                    This is the React logo!
                </h4>

                <p style={{
                    fontFamily: '"Caveat", cursive',
                    color: '#a0a0a0',
                    fontSize: '15px',
                    margin: '0 0 20px 0'
                }}>
                    (I don't know why it is here either)
                </p>

                <p style={{
                    margin: 0,
                    fontSize: '17px',
                    color: '#222',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                }}>
                    The library for web and native user interfaces
                </p>
            </div>
        </div>
    );
}