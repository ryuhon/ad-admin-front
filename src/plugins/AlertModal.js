import AlertModalTemplate from './AlertModalTemplate.vue';

export default {
	install(Vue) {
		var ModalConstructor = Vue.extend(AlertModalTemplate);
		var modalInstance = null;

		var AlertModal = function() {};

		AlertModal.show = function(message) {
			if (modalInstance) {
				modalInstance.isShowModal = true;

				modalInstance.message = message;
				return;
			}

			modalInstance = new ModalConstructor({
				el: document.createElement('div'),
				data() {
					return {
						message: message,
					};
				},
			});
			modalInstance.isShowModal = true;
			document.body.appendChild(modalInstance.$el);
		};

		AlertModal.close = function() {
			if (modalInstance) {
				modalInstance.isShowModal = false;
				return;
			}
		};

		Vue.prototype.$alert = AlertModal;
	},
};
