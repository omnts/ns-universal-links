open:
	open ns-universal-links.code-workspace

creater-project-command:
	@echo "project created with the command :"
	@echo "ns create ns-universal-link --angular"

install-universal-link-plugin:
	ns plugin add @nativescript-community/universal-links

debug-android:
	tns debug android

debug-ios:
	tns debug ios

uninstall:
	adb uninstall apps.apptrtotter.nativescriptuniversallink.com