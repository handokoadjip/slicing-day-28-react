import React, { Component } from "react";
import { Header, Main } from "components/atoms";
import {
  Navbar,
  SectionTitle,
  SectionHistory,
  SectionOverview,
  SectionImage1,
  SectionContent1,
  SectionImage2,
  SectionServices,
  SectionContent2,
  Footer,
} from "components/molecules";

class index extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scroll(0, 0);
    document.title = "Baltic Arch | Company";
  }

  render() {
    return (
      <>
        <Header>
          <Navbar />
        </Header>
        <Main>
          <SectionTitle />
          <SectionHistory />
          <SectionOverview />
          <SectionImage1 />
          <SectionContent1 />
          <SectionImage2 />
          <SectionServices />
          <SectionContent2 />
        </Main>
        <Footer />
      </>
    );
  }
}

export default index;
