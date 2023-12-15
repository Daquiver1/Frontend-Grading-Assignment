import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import{scrollToTop} from "utils/page";

const PageWrapper = styled.div
width: 100%
min-height: 100%
padding: 0;
margin: 0;
display: flex;
flex-direction: column;
align-items: center;


export function PageContainer(props){
    // Make sure to always scroll to top of the page on every page
    useEffect(() => {
        scrollToTop();
    }, []);
    return <PageWrapper>{props.children}</PageWrapper>;
}

export const InnerPageContainer = styled.div
flex: 1;
width: 100%;