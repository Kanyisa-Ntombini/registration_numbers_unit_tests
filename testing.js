describe('Testing function:',
    function() {
        it('should check that Mocha works' , function(){
            assert.equal(2,2);
    
            assert.deepEqual([2,2],[2,2]);
        });
    }
);

describe('Greetings function: Checking when a page refreshes' , 
    function() {
        it ('should check if a new list is created in an empty localStorage', function(){
            localStorage.clear();
            let testing = AddingRegNumbers();
            testing.checkStorageList();

            assert.deepEqual('[]', localStorage.getItem('keyList'));
        });

        it('should check if keyTown exists', function() {
            let testing = AddingRegNumbers();
            testing.checkStorageList();
            localStorage.setItem('keyTown', 'CA');

            assert.deepEqual(true, testing.checkKeyTown());
        });
    }
);


describe('Greetings function: Checking when a registration number is entered' , 
    function() {
        it ('should check if the right registration number is stored', function(){
            let testing1 = AddingRegNumbers();
            testing1.setRegNum('');
            assert.deepEqual('', testing1.getRegNum());

            let testing2 = AddingRegNumbers();
            testing2.setRegNum('ca 5555');
            assert.deepEqual('CA 5555', testing2.getRegNum());
        });

        it('should get the updated list', function() {
            let testing = AddingRegNumbers();
            localStorage.setItem('keyList', JSON.stringify(['CY 2222', 'CJ 9999']));
            testing.checkStorageList();
            testing.checkKeyTown();
            testing.setRegNum('CL 6666')
            testing.addToList();
            
            assert.deepEqual(['CY 2222', 'CJ 9999', 'CL 6666'], testing.getUpdatedRegList());
        });
    }
);