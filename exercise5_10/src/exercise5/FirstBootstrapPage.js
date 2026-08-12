import React from 'react';

function FirstBootstrapPage() {
    return (
        <div className="container my-4">
            <div className="p-5 mb-4 bg-light rounded-3 text-center">
                <h1 className="display-6 fw-bold">My First Bootstrap Page</h1>
            </div>

            <div className="row text-center justify-content-center align-items-center g-4">


                <div className="col-md-3">
                    <img src="../../images/HTML5.png" alt="Bootstrap" className="img-fluid" style={{ maxHeight: '150px' }} />
                </div>
                <div className="col-md-3">
                    <img src="../../images/css3.png" alt="CSS3" className="img-fluid" style={{ maxHeight: '150px' }} />
                </div>
                <div className="col-md-3">
                    {/* Thay thế src bằng link ảnh thực tế hoặc component icon của bạn */}
                    <img src="../../images/bootstrap.png" alt="HTML5" className="img-fluid" style={{ maxHeight: '150px' }} />
                </div>
            </div>
        </div>
    );
}

export default FirstBootstrapPage;