class HomePage {
  
    elements = {
      headerLabels: (label) => cy.contains('.header.links li', label), 
      sectionItems: (item) => cy.contains('.navigation ul li', item), 
    }
  
    verifyHeaderLabelVisibility(label) {
      this.elements.headerLabels(label).should('be.visible');
    }
  
    verifySectionItemVisibility(item) {
      this.elements.sectionItems(item).should('be.visible');
    }
  }
  
  export default HomePage;
  