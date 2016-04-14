Smalltalk createPackage: 'First'!
(Smalltalk packageAt: 'First') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #AddTask
	instanceVariableNames: 'name count id'
	package: 'First'!

!AddTask methodsFor: 'not yet classified'!

id
	^id
!

initialize
	super initialize.
	self class addToCollection.
	id := self class takeId.
    name := self class takeName
!

name
	^name
!

nameClose
	name := '',id,') ',name,' ','close'.
	^name
! !

AddTask class instanceVariableNames: 'lastId taskCollection idTest nameTest'!

!AddTask class methodsFor: 'not yet classified'!

addToCollection
	taskCollection at: self nextId put:  '#input' asJQuery val
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
	instanceVariableNames: 'task header'
	package: 'First'!

!Main methodsFor: 'not yet classified'!

initialize
	super initialize.
	task := AddTask new
!

renderOn: html
	header := html div
		with: '',task id,') ', task name;
		yourself.
	html button
		with: 'Завершить задачу';
		onClick: [  ].
! !

Main class instanceVariableNames: 'taskCollections'!

!Main class methodsFor: 'not yet classified'!

tryExample
	self new appendToJQuery: '#tasks' asJQuery
! !

