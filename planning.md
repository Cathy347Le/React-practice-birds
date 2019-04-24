# Steps

- Setup file structure
- Update index.js to find the App component
- Create nav bar in App component
- Npm install react-router-dom and react-router
- Create BirdList component to display all the bird images. Render them in the App component
- Create a Bird component to display individual bird. Link it in the BirdList

```
    const singleBird = this.props.birds.find(
      bird => bird.name === this.props.match.params.name
```

- Needs to access BirdData in Bird model so lets move the state up to App and pass it down via props.
- BirdData array need single quotes in American Black Duck
- Redo App and BirdList and retest to see all birds show up. Remember to console.log this.props
- Work on Bird model to display individual. And remember to console.log this.props
- add createBird model to push bird up to state
  - handleNewBird method should be in app.js since that is where state lives
- create form and from is submit, redirect you back to the homepage

```
this.props.history.push("/");
```
