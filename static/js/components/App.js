import React from 'react';



class Family extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			justin: { name: "justin", age: 0 },
			joseph: { name: "joseph", age: 2 },
			alesia: { name: "alesia", age: 33 },
			patrick: { name: "patrick", age: 33 }
		}
		this.ageIncrement = this.ageIncrement.bind(this)
	}
	ageIncrement(familyMember) {
		let currentFamilyState = this.state
		let affectedFamilyMember = familyMember.props.name;

		// creating new, updated state object
		currentFamilyState[affectedFamilyMember].age +=1;

		this.setState({
			currentFamilyState
		});
	}

	render() {
		return (
			<div className="family">
				<Member name={this.state.justin.name} age={this.state.justin.age} ageIncrement={this.ageIncrement} />
				<Member name={this.state.joseph.name} age={this.state.joseph.age} ageIncrement={this.ageIncrement} />
				<Member name={this.state.alesia.name} age={this.state.alesia.age} ageIncrement={this.ageIncrement} />
				<Member name={this.state.patrick.name} age={this.state.patrick.age} ageIncrement={this.ageIncrement} />
			</div>
		) 
	}
}

class Member extends React.Component {
	
	constructor(props) {
		super(props)
	}

	render() {
		return( 
			<p onClick = { ()=> { this.props.ageIncrement(this) } } >
				{this.props.name}: {this.props.age}
			</p>
		)
	}
}



class App extends React.Component {
	render() {
		return <Family />
	}
}
export default App