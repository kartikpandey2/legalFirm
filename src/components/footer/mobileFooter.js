import React, { Component } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

import contact from "../../images/call.svg"
import team from "../../images/team.svg"
import home from "../../images/home.svg"
import expertise from "../../images/lawyer.svg"
import about from "../../images/file.svg"
import aboutAfterClick from "../../images/fileAfterClick.svg"
import expertiseAfterClick from "../../images/lawyerAfterClick.svg"
import contactAfterClick from "../../images/callAfterClick.svg"
import homeAfterClick from "../../images/homeAfterClick.svg"
import teamAfterClick from "../../images/teamAfterClick.svg"

const styles = {
  footer: {
    borderTop: "1px solid rgba(0, 0, 0, 0.1)",
    position: "fixed",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    maxHeight: "80px",
  },
  container: {
    padding: "0.5rem 0.5rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  items: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxHeight: "1.5em",
    maxWidth: "2rem",
  },
}

class MobileFooter extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { page } = this.props
    const button = document.querySelector(`#${page}`)
    if (button) {
      button.style.color = "rgb(33, 150, 243)"
      const img = document.querySelector(`#${page} > span > div > img`)
      switch (page) {
        case "home":
          img.src = homeAfterClick
          break

        case "about":
          img.src = aboutAfterClick
          break

        case "expertise":
          img.src = expertiseAfterClick
          break

        case "contact":
          img.src = contactAfterClick
          break

        case "team":
          img.src = teamAfterClick
          break

        default:
          img.src = null
      }
    }
  }

  render() {
    const { classes } = this.props
    return (
      <footer className={classes.footer}>
        <div className={classes.container}>
          <Link to="/">
            <Button id="home">
              <div className={classes.items}>
                <img src={home} className={classes.image} alt="home" />
                <label>Home</label>
              </div>
            </Button>
          </Link>
          <Link to="/about">
            <Button id="about">
              <div className={classes.items}>
                <img src={about} className={classes.image} alt="about" />
                <label>About</label>
              </div>
            </Button>
          </Link>
          <Link to="expertise">
            <Button id="expertise">
              <div className={classes.items}>
                <img
                  src={expertise}
                  className={classes.image}
                  alt="expertise"
                />
                <label>Expertise</label>
              </div>
            </Button>
          </Link>
          <Link to="/team">
            <Button id="team">
              <div className={classes.items}>
                <img src={team} className={classes.image} alt="team" />
                <label>Team</label>
              </div>
            </Button>
          </Link>
          <Link to="/contact">
            <Button id="contact">
              <div className={classes.items}>
                <img src={contact} className={classes.image} alt="contact" />
                <label>Contact</label>
              </div>
            </Button>
          </Link>
        </div>
      </footer>
    )
  }
}

MobileFooter.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.string.isRequired,
}

export default withStyles(styles)(MobileFooter)
