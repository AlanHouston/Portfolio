import React from 'react';
import { Document } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import './AlResume.pdf';

export default class Resume extends React.Component{

    render(){
        return(
            <Document file="AlResume.pdf" onLoadSuccess={this.onDocumentLoadSuccess}/>
        )
    }
}