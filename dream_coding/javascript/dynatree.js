'use strict';

function modifyClas(nodeKey, callback) {
	if (checkParentClasExtOpen(nodeKey)) {
		if (checkChangeOfExtOpen()) {
			callback();
		} else {
			const needToUpdateExtOpen = true;
			confirmUpdateClasExtOpen(callback, needToUpdateExtOpen);
		}
	} else {
		callback();
	}
}

function addClas(parentNodeKey, callback) {
	if (checkClasExtOpen(parentNodeKey)) {
		callback();
	} else {
		const PUBLIC = '0';
		if (PUBLIC === getCheckedRadioValueByName('ext_open_yn')) {
			alert(`상위 분류가 비공개입니다.
상위 분류를 공개로 수정하거나
해당 분류를 비공개로 설정해주세요.`);
		} else {
			callback();
		}
	}
}

function checkClasExtOpen(nodeKey) {
	const extOpenYn = treeInstance.getNodeByKey(nodeKey).data.ext_open_yn;
	const PUBLIC = '0';
	if (extOpenYn === PUBLIC) return true;
	return false;
}

function checkParentClasExtOpen(nodeKey) {
	const parentExtOpenYn = treeInstance.getNodeByKey(nodeKey).getParent().data
		.ext_open_yn;
	const PUBLIC = '0';
	if (parentExtOpenYn === PUBLIC) return true;
	return false;
}

function checkChangeOfExtOpen() {
	const prevExtOpen = document.querySelector('input[name=prev-ext_open_yn]');
	const selectedExtOpen = Array.from(
		document.querySelectorAll('input[name=ext_open_yn]')
	).filter((el) => el.checked)[0];
	const SAME = true;
	const DIFFERENT = false;

	if (
		prevExtOpen &&
		selectedExtOpen &&
		prevExtOpen.value === selectedExtOpen.value
	) {
		return SAME;
	} else {
		return DIFFERENT;
	}
}

function confirmUpdateClasExtOpen(func, param) {
	if (confirm('하위 분류도 일괄 (비)공개 됩니다. 진행하시겠습니까?')) {
		func(param);
	}
}

function jsTreeActiveNode(key) {
	treeInstance.activateKey(key);
}

function selectContextMenuAction(action, node) {
	switch (action) {
		case 'new':
			jsAddForm(node);
			break;
		case 'edit':
			jsModForm(node);
			break;
		case 'delete':
			jsDelForm(node);
			break;
		case 'deleteReal':
			jsDelFormReal(node);
			break;
		case 'cut':
			jsCopyPaste(action, node);
			break;
		case 'paste':
			jsCopyPaste(action, node);
			break;
		case 'quit':
			break;
		case 'private':
			updateExtOpen(node);
			break;
		case 'public':
			updateExtOpen(node);
			break;
		default:
			alert("Todo: appply action '" + action + "' to node " + node);
	}
}

function closeContextMenu() {
	document
		.querySelectorAll('.contextMenu')
		.forEach((el) => (el.style.display = 'none'));
}

function setChildrenMoveButton(node) {
	const children = node.getChildren();

	for (const i in children) {
		setMoveButton(children[i].data);
	}
}

function setMoveButton(data) {
	const BeforeTarget = $tree
		.dynatree('getTree')
		.getNodeByKey(data.key)
		.getPrevSibling();
	const nextTarget = $tree
		.dynatree('getTree')
		.getNodeByKey(data.key)
		.getNextSibling();

	if (BeforeTarget || nextTarget) {
		$(`[data-key=${data.key}]`).parent()
			.after(`<span class="dynatree-icon-arrow-up" onclick="moveUp('${data.key}');">
			</span><span class="dynatree-icon-arrow-down" onclick="moveDown('${data.key}');"></span>`);
	}
}

function jsDefault() {
	$('#contsRight').css('display', 'none');
	$('#contsLeft').attr({
		class: 'col-lg-12',
	});
}

function excelDownClasList(url) {
	const frm = $("form[name='sendForm']");

	$('#qLbar').fadeIn(250);
	$.fileDownload(url, {
		httpMethod: 'POST',
		data: frm.serialize(),
	}).done(function () {
		$('#qLbar').fadeOut(250);
	});
}

function jsView() {
	$('#contsLeft').attr({
		class: 'col-lg-6',
	});
	$('#contsRight').css('display', 'block');
}

function jsTreeSetTitle(title) {
	const node = $tree.dynatree('getActiveNode');
	if (!node) return;
	node.setTitle(title);
}

function checkValidChildClas(data) {
	if (data.notEndCnt > 0) {
		alert(
			'하위 레벨에 분류가 있어 해당 분류를 삭제할 수 없습니다.\n\n확인후 다시 시도해 주세요.'
		);
		return;
	}
	if (data.notRecordCnt > 0) {
		alert(
			'하위 레벨에 매핑된 기록물건이 존재하여 해당 분류를 삭제할 수 없습니다.\n\n확인후 다시 시도해 주세요.'
		);
		return;
	}
	if (data.notDoneRecordCnt > 0) {
		alert(
			'하위 레벨에 등록중인 기록물건이 존재하여 해당 분류를 삭제할 수 없습니다.\n\n확인후 다시 시도해 주세요.'
		);
		return;
	}
}

function canPasteClasTree(clipboardNode, targetParent) {
	if (!existClipboardNode(clipboardNode)) return false;
	if (!validateExtOpen(clipboardNode, targetParent)) return false;
	if (isRecursive(clipboardNode, targetParent)) return false;

	return true;
}

function existClipboardNode(clipboardNode) {
	if (clipboardNode) return true;
	alert('클립보드에 등록된 정보가 없습니다.');
	return false;
}

function validateExtOpen(clipboardNode, targetParent) {
	if (
		targetParent.data.ext_open_yn === '1' &&
		clipboardNode.toDict().ext_open_yn === '0'
	) {
		alert('공개 분류는 비공개 분류 하위로 이동할 수 없습니다.');
		return false;
	}
	return true;
}

function isRecursive(clipboardNode, targetParent) {
	let recursive = false;
	clipboardNode.toDict(true, function (dict) {
		if (dict.key === targetParent.data.key) recursive = true;
	});
	if (recursive) alert('해당 분류의 하위로 이동할 수 없습니다.');
	return recursive;
}

function moveClasTree(clipboardNode, targetParent) {
	targetParent.addChild(clipboardNode.toDict());
	clipboardNode.remove();
}
