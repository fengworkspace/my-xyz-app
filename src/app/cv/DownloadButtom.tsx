'use client'
import React from "react";

export default function DownloadButton(){
    return(
        <div style={{ marginBottom: '3rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <button 
                    style={{ borderRadius: '5px', boxShadow: ' 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', padding: '0.5rem', margin: '0 auto' }} 
                    id="print_btn"
                    onClick={()=>{
                        var blob = new Blob(['/public/cv-chinese.pdf'], {type: 'application/pdf'});
                        var downloadLink = document.createElement('a');
                        downloadLink.setAttribute('href', window.URL.createObjectURL(blob));
                        downloadLink.setAttribute('download', '冯凡帆-前端.pdf');
                        downloadLink.click();
                    }}
                > 下载简历 </button>
            </div>
    );
} 