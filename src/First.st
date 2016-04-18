Smalltalk createPackage: 'First'!
(Smalltalk packageAt: 'First') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #AmberRemoteConnector
	instanceVariableNames: 'socket'
	package: 'First'!

AmberRemoteConnector class instanceVariableNames: 'socket'!

!AmberRemoteConnector class methodsFor: 'not yet classified'!

createSocket
		socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org/'.
		socket onopen: [ '#output-list' asJQuery append: '<li>Connected</li>'].
		socket onmessage: [:evt | '#output-list' asJQuery append: '<li>',evt data,'</li>'].
		socket onclose: [  '#output-list' asJQuery append: '<li>Connection lost</li>' ].
!

sendMessage
	socket send: 'hi'
!

tryToConnect
	self createSocket
! !

Widget subclass: #Main
	instanceVariableNames: 'task'
	package: 'First'!

!Main methodsFor: 'not yet classified'!

initialize
	super initialize.
	task := NewTask new
!

renderOn: html
    html table 
    		width: '100%';
    		with: [
	            html td width: '90%'; 
	            		with: '',task id,') ', task name;
						yourself.
	            html td width: '10%'; 
	            		with: [html input
					            type: 'checkbox';
								onClick: [task changeStatus];
								value: task id.]]
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

changeStatus
	check = false
		ifTrue: [check := true];
		ifFalse: [check := false].
  ^check
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

NewTask class instanceVariableNames: 'lastId taskCollection idTest nameTest'!

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

