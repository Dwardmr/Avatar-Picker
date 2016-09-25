import React from 'react';

export default class Avatar extends React.Component{
	handleClick(){
		const avatarArrayId = this.props.avatarArrayId;
		this.props.onClickAvatarHandler(avatarArrayId);
	}

	render(){
		const isActive = this.props.avatarArrayId == this.props.currentAvatar ? " listAvatarActive" : "";
		return(
			<div class={this.props.overlay}>
				<img 
					class={"avatar " + this.props.avatarLocation + this.props.avatarState + isActive}
					src={this.props.imgSrc}
					onClick={this.handleClick.bind(this)}
				></img>
				<div class={this.props.afterOverlay}></div>
			</div>
		);
	}
}