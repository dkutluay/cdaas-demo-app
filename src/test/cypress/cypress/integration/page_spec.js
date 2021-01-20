describe('Webpage Test', () => {
	it('Find and check GitLab', () => {
		cy.visit('/')
		cy.contains('GitLab').click()
  })
  it('Find and check XL Release', () => {
    cy.visit('/')
    cy.contains('XL Release').click()
  })
  it('Find and check Artifactory', () => {
    cy.visit('/')
    cy.contains('Artifactory').click()
  })
  it('Find and check Ansible Tower', () => {
    cy.visit('/')
    cy.contains('Ansible Tower').click()
  })
  it('Find and check Vault', () => {
    cy.visit('/')
    cy.contains('Vault').click()
  })
  it('Find and check Jenkins', () => {
    cy.visit('/')
    cy.contains('Jenkins').click()
  })
  it('Find and check PG Admin', () => {
    cy.visit('/')
    cy.contains('PG Admin').click()
  })
  it('Find and check Adminer', () => {
    cy.visit('/')
    cy.contains('Adminer').click()
  })

})