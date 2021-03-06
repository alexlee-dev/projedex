import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Placeholder } from 'semantic-ui-react'
import Sidebar from './Sidebar'
import { connect } from 'react-redux'
import Home from './Home'
import NewProject from './NewProject'
import Projects from './Projects'
import Settings from './Settings'
import ViewProject from './ViewProject'

const contentOptions = {
  home: Home,
  newProject: NewProject,
  projects: Projects,
  settings: Settings,
  viewProject: ViewProject
}

const Dashboard = ({ content }) => {
  const SelectedContent = contentOptions[content]

  return (
    <Grid className="application" columns={3} divided id="app">
      <Grid.Column style={{ padding: '0' }} width={2}>
        <Sidebar />
      </Grid.Column>
      <Grid.Column width={10}>
        <SelectedContent />
      </Grid.Column>
      <Grid.Column width={4}>
        <Placeholder>
          <Placeholder.Header image>
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Header>
          <Placeholder.Paragraph>
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
            <Placeholder.Line />
          </Placeholder.Paragraph>
        </Placeholder>
      </Grid.Column>
    </Grid>
  )
}

Dashboard.propTypes = {
  content: PropTypes.string.isRequired
}

const mapStateToProps = ({ app }) => ({ content: app.content })

export default connect(mapStateToProps, null)(Dashboard)
