import React from 'react';
import Avatar from './Avatar';
import ClickOutHandler from 'react-onclickout';
import keydown from 'react-keydown';


export default class AvatarList extends React.Component{
	constructor(){
		super();
		this.onClickAvatarHandler = this.onClickAvatarHandler.bind(this);
	}

	onClickOut(){
		if(this.props.activeState){
			this.props.changeActiveClickOut();
		}
	}
	onClickAvatarHandler(avatarArrayId){
		const avatarId = avatarArrayId;
		setTimeout(() => {
			this.props.changeId(avatarId);
			this.props.changeActiveClickOut();
		}, 1000);
	}
	@keydown(27)
	navigateEscape(){
		console.log("Escape has been pressed");
		this.props.changeActiveClickOut();
	}

	render(){
		const popoverDisplay = this.props.activeState ? "avatarPopover popoverActive" : "avatarPopover popoverInactive";
		const avatarLocation = "avatarInList "

		const avatarArray = this.props.avatarArray;
		const overlay = "overlay";
		const afterOverlay = "afterOverlay";
		const mappedAvatarArray = avatarArray.map((avatarK, i) => 
			<li class="avatarItem" key={i}>
				<Avatar 
					currentAvatar={this.props.currentAvatar}
					avatarArrayId={avatarK.id}
					avatarLocation={avatarLocation}
					avatarState={""}
					imgSrc={avatarK.src} 
					onClickAvatarHandler={this.onClickAvatarHandler} 
				/>
			</li>
		);

		return(
			<ClickOutHandler onClickOut={this.onClickOut.bind(this)}>
				<div class={popoverDisplay}>
					<p class="popoverTitle">Choose your avatar</p>
					<ul class="avatarList">
					{mappedAvatarArray}
					</ul>
				</div>
			</ClickOutHandler>
		);
	}
}