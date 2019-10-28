<template>
	<section class="search">
		<h2>Tracker Player Stats</h2>
		<form @submit.prevent="onSubmit">
			<div class="form-group">
				<label for="platform">Platform</label>
				<select  class="form-control" name="platform" id="platform" v-model="platform">
					<option value="psn">Playstation</option>
					<option value="xbl">Xbox</option>
					<option value="Origin">Origin</option>
				</select>
			</div>

			<div class="form-group">
				<label for="gamertag">Gamertag</label>
				<input   class="form-control" type="text" 
					id="gamertag" 
					name="gamertag" 
					v-model="gamertag"
					placeholder="ID game">
			</div>


			<div class="form-group">
				
				<input type="submit" 
					value="submit" 
					class="btn btn-primary form-control">
			</div>
		</form>
	</section>
</template>

<script type="text/javascript">
	export default{
		name: 'Search',
		data(){
			return{
				gamertag:'',
				platform: 'psn',
			}
		},
		beforeCreate(){
			document.body.className= 'body-bg-image';
		},
		methods:{
			onSubmit(){
				if(!this.gamertag){
					this.$toasted.show('Please enter gamertag',{
						duration: 1000,
						icon: 'exclamation-cicrle'
					});
				}else{
					this.$router.push(`/profile/${this.platform}/${this.gamertag}`)
				}
			}
		}
	};
</script>

<style scoped>
	.search{
		background-color: rgba(0,0,0,.2);
		border: 5px solid white;
		border-radius:3px;
		margin-top: 25px;
		padding: 30px;
		text-align: left;
	}
	.search h2, .search label{
		color: #ddd;
	}
</style>
