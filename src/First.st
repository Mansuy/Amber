Smalltalk createPackage: 'First'!
(Smalltalk packageAt: 'First') imports: {'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Widget subclass: #Main
	instanceVariableNames: 'task header'
	package: 'First'!

!Main methodsFor: 'not yet classified'!

initialize
	super initialize.
	task := NewTask new
!

renderOn: html
	header := html div
		with: '',task id,') ', task name;
		yourself.
	html button
		with: 'Завершить задачу';
		onClick: [  ].
! !

!Main class methodsFor: 'not yet classified'!

tryExample
	self new appendToJQuery: '#tasks' asJQuery
! !

Object subclass: #NewTask
	instanceVariableNames: 'name count id'
	package: 'First'!

!NewTask methodsFor: 'not yet classified'!

id
	^id
!

initialize
	super initialize.
	id := self class nextId.
    name := '#input' asJQuery val
!

name
	^name
!

nameClose
	name := '',id,') ',name,' ','close'.
	^name
! !

NewTask class instanceVariableNames: 'lastId'!

!NewTask class methodsFor: 'not yet classified'!

initialize
	super initialize.
	self resetId
!

nextId
	^lastId := lastId +1.
!

resetId
	lastId := 0
! !

