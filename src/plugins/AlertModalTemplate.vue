<template>
	<transition name="modal">
		<div class="alert-mask" v-if="isShowModal">
			<div class="alert-wrapper">
				<div class="alert-container">
					<div class="alert-body">
						{{ message }}
					</div>
					<div>
						<button class="modal-default-button" @click="close">확인</button>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
export default {
	name: 'AlertModal',
	methods: {
		show: function(message) {
			this.isShowModal = true;
			this.message = message;
		},
		close: function() {
			this.isShowModal = false;
		},
	},
	data() {
		return {
			isShowModal: false,
			message: '',
		};
	},
};
</script>

<style scoped>
.alert-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.alert-wrapper {
	display: table-cell;
	vertical-align: middle;
	text-align: center;
}

.alert-container {
	width: 300px;
	margin: 0px auto;
	padding-top: 40px;
	background-color: #fff;
	border-radius: 2px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
	font-family: Helvetica, Arial, sans-serif;
}

.alert-body {
	font-family: SpoqaHanSans;
	font-size: 16px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #000000;
}

.modal-default-button {
	width: 250px;
	height: 32px;
	border-radius: 4px;
	border: solid 1px #016ecb;
	background-color: #1693ff;
	margin-bottom: 40px;
	margin-left: 25px;
	margin-right: 25px;
	margin-top: 30px;
	font-family: SpoqaHanSans;
	font-size: 14px;
	font-weight: normal;
	font-style: normal;
	font-stretch: normal;
	line-height: normal;
	letter-spacing: normal;
	text-align: center;
	color: #ffffff;
}

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>
