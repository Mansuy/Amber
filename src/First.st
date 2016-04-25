Smalltalk createPackage: 'First'!
(Smalltalk packageAt: 'First') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #AmberRemoteConnector
	instanceVariableNames: 'socket'
	package: 'First'!

AmberRemoteConnector class instanceVariableNames: 'socket'!

!AmberRemoteConnector class methodsFor: 'not yet classified'!

createSocket
		socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.
		socket onmessage: [:evt | self receiveMessage: evt].
		socket onclose: [  '#output-list' asJQuery append: '<li>Connection lost</li>'. self tryToReconnect].
		socket onopen: [self loadData]
!

loadData
	|call|
	 '#output-list' asJQuery append: '<li>Connected</li>'. 
	call := HashedCollection new.
	call at: 'Operation' put: 'Load data'.
	
	socket send: call asJSONString
!

receiveMessage: aBlock
	|dict d1 result|
	dict := Dictionary new. 
	dict := (SmalltalkImage current readJSObject: (JSON parse: aBlock data)) copy.
	d1 := dict at: 'Operation'.
	"(Compiler new evaluateExpression: (d1))"
	'#output-list' asJQuery append: '<li>',aBlock data,'</li>'
!

sendMessage: taskId type: oType name: taskName
	|call|
	call := HashedCollection new.
	call at: 'Operation' put: oType.
	call at: 'Task id' put: taskId.
	taskName == 'null' 
		ifFalse: [call at: 'Task name' put: taskName.].
	
	socket send: call asJSONString
!

testM1
	 '#output-list' asJQuery append: '<li>','Yeah!!','</li>'
!

testM2
	 '#output-list' asJQuery append: '<li>','Yeah!! Good!!','</li>'
!

tryToConnect
	self createSocket
!

tryToReconnect
		socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.
		socket onopen: [ '#output-list' asJQuery append: '<li>Connection is restored.</li>'].
		socket onmessage: [:evt | self receiveMessage: evt].
		socket onclose: ['#output-list' asJQuery append: '<li>Unsuccessful attempt to reconnect.</li>'. 
									self tryToReconnect]
! !

Widget subclass: #Main
	instanceVariableNames: 'task header taskName'
	package: 'First'!

!Main methodsFor: 'not yet classified'!

deleteTask
	header asJQuery remove.
	AmberRemoteConnector sendMessage: '',task id type: 'Delete' name: 'null'
!

initialize
	super initialize.
	task := NewTask new.
	AmberRemoteConnector sendMessage: '',task id type: 'Add' name: task name
!

renderOn: html
	header := html div
	class: 'dragElement';
	with:[
  			html table
    		width: '100%';
    		with: [
    			html td width: '5%';
						with:[html input
									type: 'checkbox';
									onClick: [task changeStatus: taskName];
									id: task id].
	            html td width: '88%';
						with: [taskName := html label
									for: task id;
									with: '',task name;
									class: 'base'].
	            html td width: '7%'; 
	            		with: [html input
									type: 'image';
									src: 'images/Bin.png';
									alt: 'Submit';
									width: '18';
									height: '18';
									onClick: [self deleteTask].]]]
! !

Main class instanceVariableNames: 'taskCollections'!

!Main class methodsFor: 'not yet classified'!

tryExample
	self new appendToJQuery: '#tasks' asJQuery
! !

Object subclass: #NewTask
	instanceVariableNames: 'name count id check'
	package: 'First'!

!NewTask methodsFor: 'not yet classified'!

changeStatus: taskName
	check = false
		ifTrue: [check := true.
					taskName asJQuery empty.
					taskName asJQuery prop: 'class' val: 'hover'.
					taskName asJQuery append: name.
					AmberRemoteConnector sendMessage: '',id type: 'SetCheck' name: 'null'];
		ifFalse: [check := false.
					 taskName asJQuery empty.
					 taskName asJQuery prop: 'class' val: 'base'.
					 taskName asJQuery append: name.
				     AmberRemoteConnector sendMessage: '',id type: 'RemoveCheck' name: 'null'].
!

check
	^check
!

id
	^id
!

initialize
	super initialize.
	 '#input' asJQuery val = ''
		ifTrue: [ '#input' asJQuery val: 'Error'].
	self class addToCollection.
	id := self class takeId.
    name := self class takeName.
	check := false
!

name
	^name
! !

NewTask class instanceVariableNames: 'lastId taskCollection'!

!NewTask class methodsFor: 'not yet classified'!

addToCollection
	taskCollection at: self nextId put:  '#input' asJQuery val.
	'#input' asJQuery val: ''
!

initialize
	super initialize.
	taskCollection := Dictionary new.
	self resetId
!

nextId
	^lastId := lastId +1.
!

resetId
	lastId := 0
!

takeId
	^lastId
!

takeName
	^taskCollection at: lastId
! !

