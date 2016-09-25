import React from "react";

import Avatar from "./Avatar";
import AvatarList from './AvatarList';

export default class AvatarPicker extends React.Component {
	constructor(){
		super();
		this.state = {
			active: false,
			avatarId: 1
		}
		this.changeActive = this.changeActive.bind(this);
		this.changeActiveClickOut = this.changeActiveClickOut.bind(this);
		this.changeId = this.changeId.bind(this);
		this.onClickAvatarHandler = this.onClickAvatarHandler.bind(this);
	}
	changeActive(){
		this.setState({active: !this.state.active})
	}
	onClickAvatarHandler(){
		this.changeActive();
	}
	changeId(avatarId){
		this.setState({avatarId})
	}
	changeActiveClickOut(){
		this.setState({active: false})
	}
	render() {

	const avatarArray = this.props.avatarArray;
	const currentSelectedAvatar = this.state.avatarId;

	const activeAvatarSrc = avatarArray.find(avatarK => avatarK.id === currentSelectedAvatar).src;
	const avatarArrayId = avatarArray.find(avatarK => avatarK.id === currentSelectedAvatar).id;

	const avatarState = this.state.active ? ' avatarActive' : '';
	
	const avatarList = this.state.active ? <AvatarList currentAvatar={this.state.avatarId} avatarArray={this.props.avatarArray} activeState={this.state.active} changeActiveClickOut={this.changeActiveClickOut} changeId={this.changeId} /> : '';	
		return (
			<div class="avatarPicker">
				<Avatar
					imgSrc={activeAvatarSrc}
					avatarArrayId={avatarArrayId}
					onClickAvatarHandler={this.onClickAvatarHandler}
					avatarState={avatarState} 
					avatarLocation={""}
					overlay=""
					afterOverlay=""


					currentAvatar={this.state.avatarId}
					avatarArray={this.props.avatarArray}
				/>
				{avatarList}
			</div>
		);
	}
}
